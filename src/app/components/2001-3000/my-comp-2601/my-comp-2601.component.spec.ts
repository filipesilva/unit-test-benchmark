import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2601Component } from './my-comp-2601.component';

describe('MyComp2601Component', () => {
  let component: MyComp2601Component;
  let fixture: ComponentFixture<MyComp2601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
