import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4748Component } from './my-comp-4748.component';

describe('MyComp4748Component', () => {
  let component: MyComp4748Component;
  let fixture: ComponentFixture<MyComp4748Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4748Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
