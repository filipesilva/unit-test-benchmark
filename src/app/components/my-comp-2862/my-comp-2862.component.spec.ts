import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2862Component } from './my-comp-2862.component';

describe('MyComp2862Component', () => {
  let component: MyComp2862Component;
  let fixture: ComponentFixture<MyComp2862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2862Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
