import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5991Component } from './my-comp-5991.component';

describe('MyComp5991Component', () => {
  let component: MyComp5991Component;
  let fixture: ComponentFixture<MyComp5991Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5991Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
