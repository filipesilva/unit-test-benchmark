import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5131Component } from './my-comp-5131.component';

describe('MyComp5131Component', () => {
  let component: MyComp5131Component;
  let fixture: ComponentFixture<MyComp5131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
