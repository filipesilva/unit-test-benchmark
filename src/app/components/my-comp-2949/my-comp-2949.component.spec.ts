import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2949Component } from './my-comp-2949.component';

describe('MyComp2949Component', () => {
  let component: MyComp2949Component;
  let fixture: ComponentFixture<MyComp2949Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2949Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
