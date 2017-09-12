import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5531Component } from './my-comp-5531.component';

describe('MyComp5531Component', () => {
  let component: MyComp5531Component;
  let fixture: ComponentFixture<MyComp5531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
