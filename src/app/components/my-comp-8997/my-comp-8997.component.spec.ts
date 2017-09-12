import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8997Component } from './my-comp-8997.component';

describe('MyComp8997Component', () => {
  let component: MyComp8997Component;
  let fixture: ComponentFixture<MyComp8997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8997Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
