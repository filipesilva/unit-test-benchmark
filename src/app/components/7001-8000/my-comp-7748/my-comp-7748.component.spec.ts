import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7748Component } from './my-comp-7748.component';

describe('MyComp7748Component', () => {
  let component: MyComp7748Component;
  let fixture: ComponentFixture<MyComp7748Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7748Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
