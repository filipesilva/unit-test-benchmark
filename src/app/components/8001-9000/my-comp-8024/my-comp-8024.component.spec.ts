import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8024Component } from './my-comp-8024.component';

describe('MyComp8024Component', () => {
  let component: MyComp8024Component;
  let fixture: ComponentFixture<MyComp8024Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8024Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
