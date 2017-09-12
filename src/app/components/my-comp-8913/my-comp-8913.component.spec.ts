import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8913Component } from './my-comp-8913.component';

describe('MyComp8913Component', () => {
  let component: MyComp8913Component;
  let fixture: ComponentFixture<MyComp8913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8913Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
