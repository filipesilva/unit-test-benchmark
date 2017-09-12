import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8392Component } from './my-comp-8392.component';

describe('MyComp8392Component', () => {
  let component: MyComp8392Component;
  let fixture: ComponentFixture<MyComp8392Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8392Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
