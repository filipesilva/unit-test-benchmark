import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7830Component } from './my-comp-7830.component';

describe('MyComp7830Component', () => {
  let component: MyComp7830Component;
  let fixture: ComponentFixture<MyComp7830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
