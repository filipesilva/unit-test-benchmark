import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2977Component } from './my-comp-2977.component';

describe('MyComp2977Component', () => {
  let component: MyComp2977Component;
  let fixture: ComponentFixture<MyComp2977Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2977Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
