import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp794Component } from './my-comp-794.component';

describe('MyComp794Component', () => {
  let component: MyComp794Component;
  let fixture: ComponentFixture<MyComp794Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp794Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
