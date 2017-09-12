import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8350Component } from './my-comp-8350.component';

describe('MyComp8350Component', () => {
  let component: MyComp8350Component;
  let fixture: ComponentFixture<MyComp8350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
