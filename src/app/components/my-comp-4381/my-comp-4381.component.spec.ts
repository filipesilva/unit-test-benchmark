import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4381Component } from './my-comp-4381.component';

describe('MyComp4381Component', () => {
  let component: MyComp4381Component;
  let fixture: ComponentFixture<MyComp4381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4381Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
