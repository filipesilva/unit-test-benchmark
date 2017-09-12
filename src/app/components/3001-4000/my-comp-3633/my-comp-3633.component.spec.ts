import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3633Component } from './my-comp-3633.component';

describe('MyComp3633Component', () => {
  let component: MyComp3633Component;
  let fixture: ComponentFixture<MyComp3633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
