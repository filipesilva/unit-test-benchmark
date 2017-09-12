import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2540Component } from './my-comp-2540.component';

describe('MyComp2540Component', () => {
  let component: MyComp2540Component;
  let fixture: ComponentFixture<MyComp2540Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2540Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
