import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8977Component } from './my-comp-8977.component';

describe('MyComp8977Component', () => {
  let component: MyComp8977Component;
  let fixture: ComponentFixture<MyComp8977Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8977Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
