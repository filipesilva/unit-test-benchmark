import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8447Component } from './my-comp-8447.component';

describe('MyComp8447Component', () => {
  let component: MyComp8447Component;
  let fixture: ComponentFixture<MyComp8447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8447Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
