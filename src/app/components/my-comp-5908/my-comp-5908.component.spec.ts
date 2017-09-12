import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5908Component } from './my-comp-5908.component';

describe('MyComp5908Component', () => {
  let component: MyComp5908Component;
  let fixture: ComponentFixture<MyComp5908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
