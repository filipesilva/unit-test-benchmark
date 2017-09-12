import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3288Component } from './my-comp-3288.component';

describe('MyComp3288Component', () => {
  let component: MyComp3288Component;
  let fixture: ComponentFixture<MyComp3288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
