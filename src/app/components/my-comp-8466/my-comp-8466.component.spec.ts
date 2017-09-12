import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8466Component } from './my-comp-8466.component';

describe('MyComp8466Component', () => {
  let component: MyComp8466Component;
  let fixture: ComponentFixture<MyComp8466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
