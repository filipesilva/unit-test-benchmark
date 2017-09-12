import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5601Component } from './my-comp-5601.component';

describe('MyComp5601Component', () => {
  let component: MyComp5601Component;
  let fixture: ComponentFixture<MyComp5601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
