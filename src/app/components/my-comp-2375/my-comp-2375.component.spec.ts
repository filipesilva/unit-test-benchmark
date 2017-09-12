import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2375Component } from './my-comp-2375.component';

describe('MyComp2375Component', () => {
  let component: MyComp2375Component;
  let fixture: ComponentFixture<MyComp2375Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2375Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
