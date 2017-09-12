import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7717Component } from './my-comp-7717.component';

describe('MyComp7717Component', () => {
  let component: MyComp7717Component;
  let fixture: ComponentFixture<MyComp7717Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7717Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
