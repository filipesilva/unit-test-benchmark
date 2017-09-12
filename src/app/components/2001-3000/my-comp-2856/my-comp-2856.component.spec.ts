import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2856Component } from './my-comp-2856.component';

describe('MyComp2856Component', () => {
  let component: MyComp2856Component;
  let fixture: ComponentFixture<MyComp2856Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2856Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
