import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2376Component } from './my-comp-2376.component';

describe('MyComp2376Component', () => {
  let component: MyComp2376Component;
  let fixture: ComponentFixture<MyComp2376Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2376Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
