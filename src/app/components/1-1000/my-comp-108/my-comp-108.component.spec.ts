import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp108Component } from './my-comp-108.component';

describe('MyComp108Component', () => {
  let component: MyComp108Component;
  let fixture: ComponentFixture<MyComp108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
