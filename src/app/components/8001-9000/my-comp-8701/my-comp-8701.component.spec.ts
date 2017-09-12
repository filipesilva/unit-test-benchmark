import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8701Component } from './my-comp-8701.component';

describe('MyComp8701Component', () => {
  let component: MyComp8701Component;
  let fixture: ComponentFixture<MyComp8701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8701Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
