import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5633Component } from './my-comp-5633.component';

describe('MyComp5633Component', () => {
  let component: MyComp5633Component;
  let fixture: ComponentFixture<MyComp5633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
