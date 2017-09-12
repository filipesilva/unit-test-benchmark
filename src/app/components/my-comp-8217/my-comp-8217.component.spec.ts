import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8217Component } from './my-comp-8217.component';

describe('MyComp8217Component', () => {
  let component: MyComp8217Component;
  let fixture: ComponentFixture<MyComp8217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
