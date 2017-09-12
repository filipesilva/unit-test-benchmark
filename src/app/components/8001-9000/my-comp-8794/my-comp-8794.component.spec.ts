import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8794Component } from './my-comp-8794.component';

describe('MyComp8794Component', () => {
  let component: MyComp8794Component;
  let fixture: ComponentFixture<MyComp8794Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8794Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
