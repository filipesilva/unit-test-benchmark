import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2138Component } from './my-comp-2138.component';

describe('MyComp2138Component', () => {
  let component: MyComp2138Component;
  let fixture: ComponentFixture<MyComp2138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
