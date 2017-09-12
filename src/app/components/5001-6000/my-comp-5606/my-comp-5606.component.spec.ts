import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5606Component } from './my-comp-5606.component';

describe('MyComp5606Component', () => {
  let component: MyComp5606Component;
  let fixture: ComponentFixture<MyComp5606Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5606Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
