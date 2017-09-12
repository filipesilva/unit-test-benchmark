import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9044Component } from './my-comp-9044.component';

describe('MyComp9044Component', () => {
  let component: MyComp9044Component;
  let fixture: ComponentFixture<MyComp9044Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9044Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
