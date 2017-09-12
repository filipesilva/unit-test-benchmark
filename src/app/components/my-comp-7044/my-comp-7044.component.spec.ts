import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7044Component } from './my-comp-7044.component';

describe('MyComp7044Component', () => {
  let component: MyComp7044Component;
  let fixture: ComponentFixture<MyComp7044Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7044Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
