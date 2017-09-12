import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8156Component } from './my-comp-8156.component';

describe('MyComp8156Component', () => {
  let component: MyComp8156Component;
  let fixture: ComponentFixture<MyComp8156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
