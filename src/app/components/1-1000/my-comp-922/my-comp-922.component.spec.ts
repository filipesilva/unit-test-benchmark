import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp922Component } from './my-comp-922.component';

describe('MyComp922Component', () => {
  let component: MyComp922Component;
  let fixture: ComponentFixture<MyComp922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
