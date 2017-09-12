import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2929Component } from './my-comp-2929.component';

describe('MyComp2929Component', () => {
  let component: MyComp2929Component;
  let fixture: ComponentFixture<MyComp2929Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2929Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
