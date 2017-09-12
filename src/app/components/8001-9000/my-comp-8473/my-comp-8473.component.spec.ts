import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8473Component } from './my-comp-8473.component';

describe('MyComp8473Component', () => {
  let component: MyComp8473Component;
  let fixture: ComponentFixture<MyComp8473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
