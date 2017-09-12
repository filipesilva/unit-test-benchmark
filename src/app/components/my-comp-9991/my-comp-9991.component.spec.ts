import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9991Component } from './my-comp-9991.component';

describe('MyComp9991Component', () => {
  let component: MyComp9991Component;
  let fixture: ComponentFixture<MyComp9991Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9991Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
