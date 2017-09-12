import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8711Component } from './my-comp-8711.component';

describe('MyComp8711Component', () => {
  let component: MyComp8711Component;
  let fixture: ComponentFixture<MyComp8711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
