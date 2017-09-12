import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5931Component } from './my-comp-5931.component';

describe('MyComp5931Component', () => {
  let component: MyComp5931Component;
  let fixture: ComponentFixture<MyComp5931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
