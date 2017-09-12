import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3991Component } from './my-comp-3991.component';

describe('MyComp3991Component', () => {
  let component: MyComp3991Component;
  let fixture: ComponentFixture<MyComp3991Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3991Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
