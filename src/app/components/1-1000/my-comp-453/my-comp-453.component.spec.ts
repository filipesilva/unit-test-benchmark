import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp453Component } from './my-comp-453.component';

describe('MyComp453Component', () => {
  let component: MyComp453Component;
  let fixture: ComponentFixture<MyComp453Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp453Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
