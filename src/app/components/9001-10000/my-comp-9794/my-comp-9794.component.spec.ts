import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9794Component } from './my-comp-9794.component';

describe('MyComp9794Component', () => {
  let component: MyComp9794Component;
  let fixture: ComponentFixture<MyComp9794Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9794Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
