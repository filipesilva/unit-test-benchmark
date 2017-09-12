import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4991Component } from './my-comp-4991.component';

describe('MyComp4991Component', () => {
  let component: MyComp4991Component;
  let fixture: ComponentFixture<MyComp4991Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4991Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
