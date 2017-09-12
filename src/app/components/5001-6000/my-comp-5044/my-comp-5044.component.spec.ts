import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5044Component } from './my-comp-5044.component';

describe('MyComp5044Component', () => {
  let component: MyComp5044Component;
  let fixture: ComponentFixture<MyComp5044Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5044Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
