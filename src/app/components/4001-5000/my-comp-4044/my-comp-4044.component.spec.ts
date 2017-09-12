import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4044Component } from './my-comp-4044.component';

describe('MyComp4044Component', () => {
  let component: MyComp4044Component;
  let fixture: ComponentFixture<MyComp4044Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4044Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
