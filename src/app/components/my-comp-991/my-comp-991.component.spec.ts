import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp991Component } from './my-comp-991.component';

describe('MyComp991Component', () => {
  let component: MyComp991Component;
  let fixture: ComponentFixture<MyComp991Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp991Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
