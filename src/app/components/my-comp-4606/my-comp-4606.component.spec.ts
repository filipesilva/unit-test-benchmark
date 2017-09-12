import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4606Component } from './my-comp-4606.component';

describe('MyComp4606Component', () => {
  let component: MyComp4606Component;
  let fixture: ComponentFixture<MyComp4606Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4606Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
