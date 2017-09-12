import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8991Component } from './my-comp-8991.component';

describe('MyComp8991Component', () => {
  let component: MyComp8991Component;
  let fixture: ComponentFixture<MyComp8991Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8991Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
